<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGrinderReportRequest;
use App\Models\Grinder;
use App\Models\GrinderProducer;
use App\Models\GrinderReport;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GrinderReportController extends Controller
{
    public function index()
    {
        $reports = GrinderReport::with(['grinder:id,model'])->get();

        return view('grinder-reports.index')->with('reports', $reports);
    }

    public function show(GrinderReport $grinderReport)
    {
        return view('grinder-reports.show')
            ->with('report', $grinderReport)
            ->with('grinder', $grinderReport->grinder)
            ->with('producer', $grinderReport->grinder->grinder_producer)
            ->with('producers', DB::table('grinder_producers')->select(['id','name'])->get());
    }

    public function store(StoreGrinderReportRequest $request): JsonResponse
    {
        $data = $request->validated();
        GrinderReport::create($data);
        return response()->json(['message' => 'Report has been sent.']);
    }

    public function destroy(GrinderReport $grinderReport)
    {
        $grinderReport->delete();

        return response()->json(['message' => 'Report has been removed.']);
    }

}
