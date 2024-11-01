<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasUuids, HasFactory;

    /**
     * Nombre de la tabla
     * @var string
     */
    protected $table = 'movies';

    protected $attributes  = [
        'title' => '',
        'synopsis' => '',
        'year' => 2024,
        'cover' => '',
    ];

}
