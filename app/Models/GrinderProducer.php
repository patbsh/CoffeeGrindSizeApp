<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class GrinderProducer extends Model
{
    use HasFactory;

    public function grinder(): HasMany
    {
        return $this->hasMany(Grinder::class, 'grinder_producer_id', 'id');
    }
}
