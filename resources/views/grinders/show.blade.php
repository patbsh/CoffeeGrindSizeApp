@extends('layouts.app')
@section('content')
    <div class="container">
        <grinder-details-component
            :grinder="{{ $grinder }}"
            producer="{{ $producer }}"
            :is_admin="{{ (isset(auth()->user()->id) && auth()->user()->hasRole('Admin')) ? 1 : 0 }}">
        </grinder-details-component>
    </div>
@endsection
