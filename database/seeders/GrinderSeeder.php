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
            'range_size' => 5,
            'very_fine' => 5,
            'fine' => 11,
            'medium' => 21,
            'medium_coarse' => 21,
            'coarse' => 31,
            'very_coarse' => 36,
            'can_espresso' => 1,
            'is_verified' => 1
        ]);

        Grinder::create([
            'model' => 'C2',
            'grinder_producer_id' => 2,
            'range_size' => 4,
            'very_fine' => 1,
            'fine' => 7,
            'medium' => 16,
            'medium_coarse' => 21,
            'coarse' => 24,
            'very_coarse' => 29,
            'can_espresso' => 1,
            'is_verified' => 1,
            'notes' => 'not recommended for very fine grinds'
        ]);

        Grinder::create([
            'model' => 'Ode',
            'grinder_producer_id' => 3,
            'range_size' => 2,
            'fine' => 1,
            'medium' => 3,
            'medium_coarse' => 5,
            'coarse' => 7,
            'very_coarse' => 9,
            'is_verified' => 1,
        ]);

        Grinder::create([
            'model' => 'Encore',
            'grinder_producer_id' => 4,
            'range_size' => 5,
            'very_fine' => 1,
            'fine' => 6,
            'medium' => 12,
            'medium_coarse' => 20,
            'coarse' => 25,
            'very_coarse' => 35,
            'can_espresso' => 1,
            'is_verified' => 1
        ]);

        Grinder::create([
            'model' => 'q2',
            'grinder_producer_id' => 5,
            'range_size' => 10,
            'very_fine' => 18,
            'fine' => 38,
            'medium' => 45,
            'medium_coarse' => 55,
            'coarse' => 60,
            'very_coarse' => 72,
            'can_espresso' => 1,
            'is_verified' => 1
        ]);
    }
}
