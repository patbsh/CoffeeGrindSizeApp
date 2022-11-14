@extends('layouts.app')
@section('content')
    <div class="container">
        <grinder-report-details-component
            :report="{{ $report }}"
            :producers="{{ $producers }}"
            :grinder="{{ $grinder }}">
        </grinder-report-details-component>
    </div>
@endsection
