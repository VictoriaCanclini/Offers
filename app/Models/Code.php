<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Code extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'discount_amount',
        'expires_at',
        'user_id',
        'offer_id',
        'validated',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    
    public function offer(): BelongsTo
    {
        return $this->belongsTo(Offer::class);
    }
}
