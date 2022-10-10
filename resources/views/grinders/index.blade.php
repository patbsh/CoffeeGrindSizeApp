@extends('layouts.app')
@section('content')
    <div class="container">
        <table class="table table-striped table-hover">
            <thead class="table-dark">
            <tr>
                <td>Grinder model</td>
                <td>Grinder producer</td>
                <td>Details</td>
            </tr>
            </thead>
            <tbody>
                @foreach($grinders as $grinder)
                    <tr>
                        <td>{{ $grinder->model }}</td>
                        <td>{{ $grinder->grinder_producer->name }}</td>
                        <td>
                            <a href="{{ route('grinders.show', $grinder) }}" class="btn btn-primary">
                                show
                            </a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
{{--        {{ $grinders->links() }}--}}
    </div>

@endsection
