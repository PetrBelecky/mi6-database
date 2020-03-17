<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Person;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::orderBy('name')
            ->limit(20)
            ->get();

        return $people;
    }
}
