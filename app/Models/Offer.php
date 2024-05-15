<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Offer extends Model
{
    use HasFactory;
    protected $fillable = [
        'message'
    ];

    public function codes(): HasMany
    {
        return $this->hasMany(Code::class);
    }
    
}