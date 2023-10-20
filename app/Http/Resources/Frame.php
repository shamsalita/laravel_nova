<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Frame extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    // public function toArray($request)
    // {
    //     return parent::toArray($request);
    // }

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'file' => '/storage/' . $this->file,
            'icon' => '/storage/' . $this->icon,
            'description' => strip_tags($this->description)
        ];
    }
}
