<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/test', function () {
    return view('test');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::resource('grinders', \App\Http\Controllers\GrinderController::class)
    ->only('index', 'store', 'show');
Route::resource('grinders', \App\Http\Controllers\GrinderController::class)
    ->middleware('role:Admin')
    ->only('update');
Route::resource('producers', \App\Http\Controllers\GrinderProducerController::class)
    ->only('index', 'show');
Route::resource('grinder-reports', \App\Http\Controllers\GrinderReportController::class)->only('store');
Route::resource('grinder-reports', \App\Http\Controllers\GrinderReportController::class)->middleware('role:Admin')->only('index', 'show', 'destroy');


