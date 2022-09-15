<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grinders', function (Blueprint $table) {
            $table->id();
            $table->string('model');
            $table->integer('very_fine_min')->nullable();
            $table->integer('very_fine_max')->nullable();
            $table->integer('fine_min');
            $table->integer('fine_max');
            $table->integer('medium_min');
            $table->integer('medium_max');
            $table->integer('medium_coarse_min');
            $table->integer('medium_coarse_max');
            $table->integer('coarse_min');
            $table->integer('coarse_max');
            $table->integer('very_coarse_min');
            $table->string('notes')->nullable();
            $table->boolean('is_verified')->default(0);
            $table->boolean('can_espresso')->default(0);
            $table->foreignId('grinder_producer_id')->nullable()->constrained()->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grinders');
    }
};
