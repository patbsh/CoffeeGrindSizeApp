@extends('layouts.app')
@section('content')
    <div class="container">
        <grinder-report-details-component :report="{{ $report }}"></grinder-report-details-component>
    </div>
@endsection
