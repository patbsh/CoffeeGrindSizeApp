@extends('layouts.app')
@section('content')
    <div class="container">
        <grinder-reports-data-table-component
            :reports="{{$reports}}"
            report_link="{{ route('grinder-reports.index') }}"
        ></grinder-reports-data-table-component>
    </div>

@endsection
