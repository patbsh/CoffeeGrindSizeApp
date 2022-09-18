<?php

namespace App\Providers;

use App\Models\Grinder;
use App\Models\GrinderProducer;
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
                cache()->remember('grinders', config('cache.default_cache_time'), function () {
                    return  Grinder::with(['grinder_producer'])->where('is_verified', '=', 1)->get();
                })
            );
        });

        view()->composer('home', function ($view) {
            $view->with(
                'producers',
                cache()->remember('producers', config('cache.default_cache_time'), function () {
                    return  GrinderProducer::all()->where('is_verified', '=', 1);
                })
            );
        });

        cache()->remember('grinders-list', config('cache.default_cache_time'), function () {
            return  Grinder::with(['grinder_producer'])->where('is_verified', '=', 1)->get();
        });
    }
}
