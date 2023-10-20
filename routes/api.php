<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UsersController;
use App\Http\Controllers\API\FramesController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [UsersController::class, 'register']);
Route::post('login', [UsersController::class, 'login']);
Route::post('logout', [UsersController::class, 'logout']);
Route::get('frames', [FramesController::class, 'index']);
Route::get('frames/show', [FramesController::class, 'show']);
Route::post('frames/update', [FramesController::class, 'update'])->middleware('auth:api');

//Route::middleware('auth:api')->group( function () {
//    Route::resource('frames', FramesController::class, ['except' => ['index', 'show']]);
//});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
