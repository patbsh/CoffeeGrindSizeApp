<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateGrinderRequest;
use App\Http\Requests\StoreGrinderRequest;
use App\Models\Grinder;
use App\Models\GrinderProducer;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class GrinderController extends Controller
{
    public function index()
    {
        (isset(auth()->user()->id) && auth()->user()->hasRole('Admin'))
            ? $grinders = Grinder::with(['grinder_producer:id,name'])->get()
            : $grinders = Grinder::with(['grinder_producer:id,name'])->where('is_verified', 1)->get();

        return view('grinders.index')->with('grinders', $grinders);
    }

    public function store(StoreGrinderRequest $request): JsonResponse
    {
        $data = $request->validated();

        if (isset($data['grinder_producer_id'])) {
            unset($data['producer_name']);
            Grinder::create($data);
            return response()->json(['message' => 'Request for a new grinder has been made.']);
        } else if (isset($data['producer_name'])) {
            $producer = GrinderProducer::create([
                'name' => $data['producer_name']
            ]);
            Grinder::create([
                'model' => $data['model'],
                'grinder_producer_id' => $producer->id,
                'very_fine_min' => $data['very_fine_min'],
                'very_fine_max' => $data['very_fine_max'],
                'fine_min' => $data['fine_min'],
                'fine_max' => $data['fine_max'],
                'medium_min' => $data['medium_min'],
                'medium_max' => $data['medium_max'],
                'medium_coarse_min' => $data['medium_coarse_min'],
                'medium_coarse_max' => $data['medium_coarse_max'],
                'coarse_min' => $data['coarse_min'],
                'coarse_max' => $data['coarse_max'],
                'very_coarse_min' => $data['very_coarse_min']
            ]);
            return response()->json(['message' => 'Request for a new grinder and producer has been made.']);
        } else {
            return response()->json(['message' => 'Something went wrong.']);
        }
    }

    public function update(UpdateGrinderRequest $request, Grinder $grinder)
    {
        $grinder->update($request->validated());

        return response()->json(['message' => 'Done.']);

    }

    public function show(Grinder $grinder)
    {
        return view('grinders.show')
            ->with('grinder', $grinder)
            ->with('producer', $grinder->grinder_producer->name)
            ->with('producers', DB::table('grinder_producers')->select(['id','name'])->get());
    }

    public function destroy(Grinder $grinder)
    {
        $grinder->delete();

        return response()->json(['message' => 'Grinder has been removed.']);
    }
}
