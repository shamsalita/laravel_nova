<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Frame extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 'file', 'icon', 'description'
    ];
    public static function boot(){
        parent::boot();
        static::creating(function ($user_id){
            $user_id->created_by = auth()->user()->id;
            $user_id->updated_by = auth()->user()->id;
        });
    }
}
