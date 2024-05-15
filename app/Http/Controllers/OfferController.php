<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;




class OfferController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response 

    {
        return Inertia::render('Offers/Index', [
            'offers' => Offer::all(), 
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Offers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        Offer::create($validated);

 
        return redirect(route('offers.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Offer $offer): Response
    {
        return Inertia::render('Offers/Show', [
            'offer' => $offer,
        ]); 
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Offer $offer): Response
    {
        return Inertia::render('Offers/Edit', [
            'offer' => $offer,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Offer $offer): RedirectResponse
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $offer->update($validated);

        return redirect(route('offers.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Offer $offer): RedirectResponse
    
    {
        $offer->delete();

        return redirect(route('offers.index'));
    }
}





// use App\Models\Offer;

// Offer::create([
//     'message' => 'Oferta 3',
// ]);

