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
            $table->integer('range_size')->default(2);
            $table->integer('very_fine')->nullable();
            $table->integer('fine');
            $table->integer('medium');
            $table->integer('medium_coarse');
            $table->integer('coarse');
            $table->integer('very_coarse');
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
