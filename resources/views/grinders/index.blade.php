@extends('layouts.app')
@section('content')
    <div class="container">
        <grinders-data-table-component :grinders="{{$grinders}}" grinder_link="{{ route('grinders.index') }}"></grinders-data-table-component>
    </div>

@endsection
