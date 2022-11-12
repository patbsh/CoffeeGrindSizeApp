<?php

namespace App\Http\Controllers;

use App\Models\GrinderProducer;
use Illuminate\Http\Request;

class GrinderProducerController extends Controller
{
    public function index()
    {
        (isset(auth()->user()->id) && auth()->user()->hasRole('Admin'))
            ? $producers = GrinderProducer::all()
            : $producers = GrinderProducer::where('is_verified', 1)->get();

        return view('producers.index')->with('producers', $producers);
    }

    public function show(GrinderProducer $producer)
    {
        return view('producers.show')
            ->with('producer', $producer);
    }
}
