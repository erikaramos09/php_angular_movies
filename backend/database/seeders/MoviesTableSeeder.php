<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Movie;

class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Movie::truncate();
        for ($i = 0; $i < 10; $i++) {
            Movie::factory()->create();
        }
    }
}
