<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class GrinderProducer extends Model
{
    use HasFactory;
    protected $fillable = ['name','is_verified'];
    public function grinder(): HasMany
    {
        return $this->hasMany(Grinder::class, 'grinder_producer_id', 'id');
    }

    public function verifiedGrinders(): HasMany
    {
        return $this->hasMany(Grinder::class, 'grinder_producer_id', 'id')
            ->where('is_verified', 1);
    }
}
