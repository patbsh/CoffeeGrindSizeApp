@extends('layouts.app')
@section('content')
    <div class="container">
        <producers-data-table-component
            :producers="{{$producers}}"
            :is_admin="{{ (isset(auth()->user()->id) && auth()->user()->hasRole('Admin')) ? 1 : 0 }}"
            producer_link="{{ route('producers.index') }}"
        ></producers-data-table-component>
    </div>

@endsection
