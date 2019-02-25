<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->prefix('v1')->group(function () {
    Route::get('users/me', function () {
        return \Auth::user();
    });

    Route::resources([
        'products' => 'ProductsController',
        'users' => 'UsersController',
    ]);
});

Route::get('cors_example', function () {
    return ['status'=>'ok'];
});
