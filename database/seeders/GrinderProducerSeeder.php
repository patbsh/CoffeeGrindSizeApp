<?php

namespace Database\Seeders;

use App\Models\GrinderProducer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GrinderProducerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        GrinderProducer::create([
            'name' => 'Comandante',
            'is_verified' => 1
        ]);

        GrinderProducer::create([
            'name' => 'Timemore',
            'is_verified' => 1
        ]);

        GrinderProducer::create([
            'name' => 'Fellow',
            'is_verified' => 1
        ]);

        GrinderProducer::create([
            'name' => 'Baratza',
            'is_verified' => 1
        ]);

        GrinderProducer::create([
            'name' => '1Zpresso',
            'is_verified' => 1
        ]);
    }
}
