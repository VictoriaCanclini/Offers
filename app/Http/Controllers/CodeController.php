<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Code;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
 

class CodeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response 
    {
        return Inertia::render('Codes/Index', [
            'codes' => Code::whereHas('user', function($query)
            {
                $query->where('id', '=', Auth::guard('web')->user()->id);
            
            })->with(['user:id,name','offer:id,message'])->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'offer_id' => 'required|exists:offers,id',
        ]);

        Code::create([
            'code' => Str::random(10),  // Generar un código aleatorio de 10 caracteres
            'discount_amount' => 10.00, // Por ejemplo, un descuento de $10.00
            'expires_at' => now()->addMonth(), // Establecer una fecha de expiración (por ejemplo, 1 mes a partir de ahora)
            'user_id' => $request->user()->id, // Asociar el código con el usuario autenticado
            'offer_id' => $validated['offer_id'], // Asociar el código con la oferta
            'validated' => false, // Por default inicia en false
        ]);

        return redirect()->route('codes.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Code $code)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Code $code)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Code $code): RedirectResponse
    {
        if ($code->user_id == $request->user()->id) {
            $code->update(['validated' => true]);
            return redirect()->back()->with('success', 'Código validado con éxito.');
        }
        return redirect()->back()->with('error', 'No se pudo validar el código.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Code $code)
    {
        //
    }
}
