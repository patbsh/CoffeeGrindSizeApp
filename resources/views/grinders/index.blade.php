@extends('layouts.app')
@section('content')
    <div class="container">
        <grinders-data-table-component
            :grinders="{{$grinders}}"
            :is_admin="{{ (isset(auth()->user()->id) && auth()->user()->hasRole('Admin')) ? 1 : 0 }}"
            grinder_link="{{ route('grinders.index') }}"
        ></grinders-data-table-component>
    </div>

@endsection
