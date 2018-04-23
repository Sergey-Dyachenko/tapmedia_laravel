@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!

                            <form  class="send-form" method="POST" action="/search-clients" style="margin-bottom:50px; ">
                                {{csrf_field()}}
                                <label for="">from</label><input class="send-form__date" name="from" data-date-format="yyyy-mm-dd" id="datepicker_from">
                                <label for="">to</label><input class="send-form__date" name="to"  data-date-format="yyyy-mm-dd" id="datepicker_to">
                                <label style="display: block;" for="comment">Mesaage:</label>
                                <textarea class="send-form__message" rows="10" cols="70" id="comment"></textarea>
                                <input style="display: block; padding: 5px 20px;" class="send-form__submit btn" type="submit" value="send"/>
                            </form>


                        <ul>
                            <h2>List of clients</h2>
                            <p ><b>Period</b>:<span>from: {{$data['from']}} </span>  <span>to: {{$data['to']}}</span> </p>
                    @foreach($clients as $client)
                        <li>Name:{{$client->name}}</li>
                        <li>Email:{{$client->email}}</li>
                    @endforeach
                        </ul>



                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
