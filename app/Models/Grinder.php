<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Grinder extends Model
{
    use HasFactory;

    public function grinder_producer(): BelongsTo
    {
        return $this->belongsTo(GrinderProducer::class);
    }
}
