<?php

namespace App\Http\Controllers;

use App\Http\Requests\GrinderStatusRequest;
use App\Models\Grinder;

class GrinderStatusController extends Controller
{
    public function update(GrinderStatusRequest $request, Grinder $grinderStatus)
    {
        $grinderStatus->update($request->validated());

        return response()->json(['message' => 'Status was updated.']);
    }
}
