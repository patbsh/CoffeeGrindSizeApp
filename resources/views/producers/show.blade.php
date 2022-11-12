@extends('layouts.app')
@section('content')
    <div class="container">
        <producer-details-component :producer="{{ $producer }}"></producer-details-component>
    </div>
@endsection
