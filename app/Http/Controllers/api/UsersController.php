<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;

class UsersController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'gender' => 'required',
            'country_code' => 'required',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ],[
            'c_password.same' => 'password and confirm password are not match'
        ]);

        if($validator->fails()){
            //return $this->sendError('Validation Error.', $validator->errors());

            return response()->json([
                "data" => [],
                "errors"=>$validator->messages(),
                "message"=> "",
                "success"=>false
            ],200);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['user_id'] =  $user->id;
        $success['first_name'] =  $user->first_name;
        $success['last_name'] =  $user->last_name;
        $success['is_admin'] =  $user->is_admin;
        $success['country_code'] =  $user->country_code;

        //return $this->sendResponse($success, 'User register successfully.');

        return response()->json([
            "data" => $success,
            "errors"=> [],
            "message"=> "user register successfully",
            "success"=>true
        ],200);
    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if($validator->fails()){
            //return $this->sendError('Validation Error.', $validator->errors());

            return response()->json([
                "data"=> [],
                "errors"=>$validator->messages(),
                "message"=> "",
                "success"=>false
            ],200);
        }

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            if($user->is_disabled == 1){
                //return $this->sendError('Unauthorised.', ['error'=>'Disabled']);

                return response()->json([
                    "data"=> [],
                    "errors"=> [],
                    "message"=>'Disabled',
                    "success"=>false
                ],200);
            }
            $success['token'] =  $user->createToken('MyApp')-> accessToken;
            $success['user_id'] =  $user->id;
            $success['first_name'] =  $user->first_name;
            $success['last_name'] =  $user->last_name;
            $success['is_admin'] =  $user->is_admin;
            $success['country_code'] =  $user->country_code;

            //return $this->sendResponse($success, 'User login successfully.');

            return response()->json([
                "data"=>$success,
                "errors"=> [],
                "message"=>'user login successfully',
                "success"=>true
            ],200);
        }
        else{
            //return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);

            return response()->json([
                "data"=> [],
                "errors"=> [],
                "message"=>'Unauthorised',
                "success"=>false
            ],200);
        }
    }

    public function logout(Request $request)
    {
        // dd(Auth::guard('api')->check());
        if (Auth::guard('api')->check()) {
           // Auth::user()->AauthAcessToken()->delete();
            if(Auth::guard('api')->user()->token()->revoke()){
                $success['logout'] = true;
                return $this->sendResponse($success, 'Logout successfull.');
            }else{
                return $this->sendError('LogoutFail.', ['error'=>'Logout Failed']);
            }
        }
    }
}
