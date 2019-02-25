<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request as IlluminateRequest;
use App\Http\Requests\ProductsRequest as Request;
use App\Product;

class ProductsController extends Controller
{
    public function index(IlluminateRequest $request)
    {
        // $minutes = \Carbon\Carbon::now()->addMinutes(10);
        // $products = \Cache::remember('api::products', $minutes, function () {
        //     return Product::all();
        // });
        // return $products;
        
        
        $term = $request->query('q');
        if($term){
            return Product::where('title', 'LIKE', "%$term%")->paginate(15);
        }

        return Product::paginate(5);
    }

    public function store(Request $request)
    {
        \Cache::forget('api::products');
        $data = $request->all();
        $data['user_id'] = \Auth::user()->id;
        return Product::create($data);
    }

    public function update(Request $request, Product $product)
    {
        $product->update($request->all());
        return $product;
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function destroy(Request $request, Product $product)
    {
        $this->authorize('delete', $product);
        $product->delete();
        return $product;
    }
}
