<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/banner', function(){
    return view('banner');
});

Route::get('/datepicker', function(){
    return view('datepicker');
});

Route::get('/mail', 'ClientsController@testmail');

Route::post('/clients', 'ClientsController@store');
Route::post('/search-clients', 'ClientsController@send');

Route::get('/welcome', function(){
   return view ('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
