<?php

namespace Database\Seeders;

use App\Models\Grinder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GrinderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Grinder::create([
            'model' => 'C40 MK4',
            'grinder_producer_id' => 1,
            'very_fine_min' => 5,
            'very_fine_max' => 10,
            'fine_min' => 11,
            'fine_max' => 15,
            'medium_min' => 21,
            'medium_max' => 25,
            'medium_coarse_min' => 26,
            'medium_coarse_max' => 30,
            'coarse_min' => 31,
            'coarse_max' => 35,
            'very_coarse_min' => 36,
            'can_espresso' => 1,
            'is_verified' => 1
        ]);

        Grinder::create([
            'model' => 'C2',
            'grinder_producer_id' => 2,
            'very_fine_min' => 1,
            'very_fine_max' => 6,
            'fine_min' => 7,
            'fine_max' => 10,
            'medium_min' => 16,
            'medium_max' => 20,
            'medium_coarse_min' => 21,
            'medium_coarse_max' => 23,
            'coarse_min' => 24,
            'coarse_max' => 28,
            'very_coarse_min' => 29,
            'can_espresso' => 1,
            'is_verified' => 1,
            'notes' => 'not recommended for very fine grinds'
        ]);

        Grinder::create([
            'model' => 'Ode',
            'grinder_producer_id' => 3,
            'fine_min' => 1,
            'fine_max' => 2,
            'medium_min' => 3,
            'medium_max' => 5,
            'medium_coarse_min' => 5,
            'medium_coarse_max' => 6,
            'coarse_min' => 6,
            'coarse_max' => 9,
            'very_coarse_min' => 9,
            'can_espresso' => 1,
            'is_verified' => 1
        ]);

        Grinder::create([
            'model' => 'Encore',
            'grinder_producer_id' => 4,
            'very_fine_min' => 1,
            'very_fine_max' => 5,
            'fine_min' => 6,
            'fine_max' => 10,
            'medium_min' => 11,
            'medium_max' => 20,
            'medium_coarse_min' => 21,
            'medium_coarse_max' => 25,
            'coarse_min' => 26,
            'coarse_max' => 30,
            'very_coarse_min' => 31,
            'can_espresso' => 1,
            'is_verified' => 1
        ]);

        Grinder::create([
            'model' => 'q2',
            'grinder_producer_id' => 5,
            'very_fine_min' => 18,
            'very_fine_max' => 30,
            'fine_min' => 31,
            'fine_max' => 38,
            'medium_min' => 39,
            'medium_max' => 45,
            'medium_coarse_min' => 46,
            'medium_coarse_max' => 54,
            'coarse_min' => 55,
            'coarse_max' => 72,
            'very_coarse_min' => 73,
            'can_espresso' => 1,
            'is_verified' => 1
        ]);
    }
}
