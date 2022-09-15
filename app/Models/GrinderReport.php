<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GrinderReport extends Model
{
    use HasFactory;
    protected $fillable = ['report','grinder_id'];

    public function grinder() : BelongsTo
    {
        return $this->belongsTo(Grinder::class);
    }
}
