<?php

namespace App\Providers;

use App\Models\Grinder;
use Illuminate\Support\ServiceProvider;

class CacheServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer('home', function ($view) {
            $view->with(
                'grinders',
                cache()->remember('subjects', config('cache.default_cache_time'), function () {
                    return  Grinder::all();
                })
            );
        });
    }
}
