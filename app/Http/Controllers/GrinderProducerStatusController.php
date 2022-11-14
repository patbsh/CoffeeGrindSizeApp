<?php

namespace App\Http\Controllers;

use App\Http\Requests\GrinderStatusRequest;
use App\Models\GrinderProducer;

class GrinderProducerStatusController extends Controller
{
    public function update(GrinderStatusRequest $request, GrinderProducer $grinderProducerStatus)
    {
        $grinderProducerStatus->update($request->validated());

        return response()->json(['message' => 'Status was updated.']);
    }
}
