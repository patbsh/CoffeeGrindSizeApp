<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGrinderRequest;
use App\Models\Grinder;
use Illuminate\Http\Request;

class GrinderController extends Controller
{
    public function store(StoreGrinderRequest $request)
    {
        $data = $request->validated();
        Grinder::create($data);
    }
}
