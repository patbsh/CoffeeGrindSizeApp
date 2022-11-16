@extends('layouts.app')
@section('content')
    <div class="container">
        <producer-details-component
            :is_admin="{{ (isset(auth()->user()->id) && auth()->user()->hasRole('Admin')) ? 1 : 0 }}"
            :producer="{{ $producer }}"
            :grinders="{{ $grinders }}"
            grinder_link="{{ route('grinders.index') }}"
        ></producer-details-component>
    </div>
@endsection
