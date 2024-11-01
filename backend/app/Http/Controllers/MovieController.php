<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Movie::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $movie = new Movie();
        $movie->title = $request->input('title');
        $movie->synopsis = $request->input('synopsis');
        $movie->cover = $request->input('cover');
        $movie->year = $request->input('year');
        $movie->saveOrFail();

        return response()->json($movie);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response()->json(Movie::findOrFail($id));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $movie = Movie::findOrFail($id);
        $title = $request->input('title');
        if (!empty($title)) {
            $movie->title = $title;
        }
        $synopsis = $request->input('synopsis');
        if (!empty($synopsis)) {
            $movie->synopsis = $synopsis;
        }
        $cover = $request->input('cover');
        if (!empty($cover)) {
            $movie->cover = $cover;
        }
        $year = $request->input('year');
        if (!empty($year)) {
            $movie->year = $year;
        }
        $movie->saveOrFail();
        return response()->json($movie);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return response()->json(Movie::destroy($id));
    }
}
