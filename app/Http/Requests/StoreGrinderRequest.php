<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGrinderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'model' => ['string', 'unique:grinders,model'],
            'grinder_producer_id' => ['integer', 'exists:grinder_producers,id', 'nullable'],
            'producer_name' => ['string', 'nullable'],
            'notes' => ['nullable'],
            'very_fine_min' => ['numeric'],
            'very_fine_max' => ['numeric'],
            'fine_min' => ['numeric'],
            'fine_max' => ['numeric'],
            'medium_min' => ['numeric'],
            'medium_max' => ['numeric'],
            'medium_coarse_min' => ['numeric'],
            'medium_coarse_max' => ['numeric'],
            'coarse_min' => ['numeric'],
            'coarse_max' => ['numeric'],
            'very_coarse_min' => ['numeric'],
        ];
    }
}
