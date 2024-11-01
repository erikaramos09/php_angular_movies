<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;

Route::group(["prefix" => "movie"], function () {

    Route::get("/", [MovieController::class, 'index']);

    Route::get("/{id}", [MovieController::class, 'show']);

    Route::post("/", [MovieController::class, "store"]);

    Route::put("/{id}", [MovieController::class, "update"]);

    Route::delete("/{id}", [MovieController::class, 'destroy']);

});
