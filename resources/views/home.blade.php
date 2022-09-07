@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    @foreach($grinders as $grinder)
                        <p>{{ $grinder->model }} and the producer is: {{ $grinder->grinder_producer->name }}</p>
                    @endforeach
                </div>
                <grind-size-component :grinders="{{$grinders}}"></grind-size-component>
            </div>
        </div>
    </div>
</div>
@endsection
