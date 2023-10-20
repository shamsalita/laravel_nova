<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Frame;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Http\Resources\Frame as FrameResource;

class FramesController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $frames = Frame::all();
        return $this->sendResponse(FrameResource::collection($frames), 'Frames retrieved successfully.');
    }

    public function show(Request $request)
    {
        $frames = Frame::where('id', $request->id)->where('is_active', 1)->get();
        return $this->sendResponse(FrameResource::collection($frames), 'Frame retrieved successfully.');
    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'title' => 'required',
            'description' => 'required',
            'file' => 'required',
            'icon' => 'required',
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

        $frames = Frame::where('id', $request->id)->where('is_active', 1)->firstOrFail();
        if($request->title){
            $frames->title = $request->title;
        }

        if ($image = $request->file('file')) {
            $destinationPath = 'storage/';
            $upload_file = date('YmdHis') . "." . $image->getClientOriginalExtension();
            if($image->move($destinationPath, $upload_file)){
                $frames->file = "$upload_file";
            }else{
                return $this->sendError('Fail', ['error'=>'Upload Failed']);
            }
        }

        if ($icon_image = $request->file('icon')) {
            $destinationPath = 'storage/';
            $iupload_file = date('YmdHis') . "_icon." . $icon_image->getClientOriginalExtension();
            if($icon_image->move($destinationPath, $iupload_file)){
                $frames->icon = "$iupload_file";
            }else{
                return $this->sendError('Fail', ['error'=>'Upload Failed']);
            }
        }

        if($request->description){
            $frames->description = $request->description;
        }
        $frames->updated_by = $request->user()->id;

        if($frames->save()){
            $success['update'] = true;
            return $this->sendResponse($success, 'Frame updated successfully.');
        }else{
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        }
    }
}
