@extends('layouts.app')
@section('content')
    <div class="container">
        <grinder-details-component :grinder="{{ $grinder }}" producer="{{ $producer }}"></grinder-details-component>
    </div>
@endsection
