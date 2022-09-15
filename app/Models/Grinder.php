<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Grinder extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function grinder_producer(): BelongsTo
    {
        return $this->belongsTo(GrinderProducer::class);
    }

    public function grinder_reports(): HasMany
    {
        return $this->hasMany(GrinderReport::class, 'grinder_id', 'id');
    }
}
