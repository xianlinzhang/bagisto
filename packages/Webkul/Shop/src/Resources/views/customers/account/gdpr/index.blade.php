<x-shop::layouts.account>
    <!-- Page Title -->
    <x-slot:title>
        @lang('shop::app.customers.account.gdpr.index.title')
    </x-slot>
    
    <!-- Breadcrumbs -->
    @if ((core()->getConfigData('general.general.breadcrumbs.shop')))
        @section('breadcrumbs')
            <x-shop::breadcrumbs name="addresses" />
        @endSection
    @endif

    <div class="max-md:hidden">
        <x-shop::layouts.account.navigation />
    </div>

    <div class="mx-4 flex-auto">
        <div class="flex items-center justify-between gap-4 max-md:flex-col">
            <div class="flex items-center">
                <!-- Back Button -->
                <a
                    class="grid md:hidden"
                    href="{{ route('shop.customers.account.index') }}"
                >
                    <span class="icon-arrow-left rtl:icon-arrow-right text-2xl"></span>
                </a>
    
                <h2 class="text-2xl font-medium max-md:text-xl max-sm:text-base ltr:ml-2.5 md:ltr:ml-0 rtl:mr-2.5 md:rtl:mr-0">
                    @lang('shop::app.customers.account.gdpr.index.title')
                </h2>
            </div>

            <div class="flex gap-4">
                <a 
                    href="{{ route('shop.customers.account.gdpr.pdf-view') }}"
                    class="secondary-button border-zinc-200 px-5 py-3 font-normal max-md:rounded-lg max-md:py-2 max-sm:py-1.5 max-sm:text-sm"
                >
                    @lang('shop::app.customers.account.gdpr.index.pdf') 
                </a>

                <a
                    href="{{ route('shop.customers.account.gdpr.html-view') }}"
                    class="secondary-button border-zinc-200 px-5 py-3 font-normal max-md:rounded-lg max-md:py-2 max-sm:py-1.5 max-sm:text-sm"
                >
                    @lang('shop::app.customers.account.gdpr.index.html') 
                </a>
    
                <button
                    class="primary-button border-zinc-200 px-5 py-3 font-normal max-md:rounded-lg max-md:py-2 max-sm:py-1.5 max-sm:text-sm"
                    @click="$refs.loginModel.open()"
                >
                    @lang('shop::app.customers.account.gdpr.index.create-btn') 
                </button>
            </div>
        </div>

        {!! view_render_event('bagisto.shop.customers.account.gdpr.list.before') !!}

        <x-shop::datagrid :src="route('shop.customers.account.gdpr.index')" />

        {!! view_render_event('bagisto.shop.customers.account.gdpr.list.after') !!}
    </div>

    <!-- Login Form -->
    <x-shop::form action="{{ route('shop.customers.account.gdpr.store') }}">
        {!! view_render_event('bagisto.shop.customers.account.gdpr.request.form_controls.before') !!}

        <x-shop::modal ref="loginModel">
            <!-- Modal Header -->
            <x-slot:header>
                <h2 class="text-2xl">
                    @lang('shop::app.customers.account.gdpr.index.modal.title')
                </h2>
            </x-slot>

            <!-- Modal Content -->
            <x-slot:content>
                <!-- Type -->
                <x-shop::form.control-group>
                    <x-shop::form.control-group.label class="required">
                        @lang('shop::app.customers.account.gdpr.index.modal.type.title')
                    </x-shop::form.control-group.label>

                    <x-shop::form.control-group.control
                        type="select"
                        name="type"
                        rules="required"
                    >
                        <option
                            value=""
                            disabled
                            selected
                        >
                            @lang('shop::app.customers.account.gdpr.index.modal.type.choose')
                        </option>

                        <option value="update">
                            @lang('shop::app.customers.account.gdpr.index.modal.type.update')
                        </option>

                        <option value="delete">
                            @lang('shop::app.customers.account.gdpr.index.modal.type.delete')
                        </option>
                    </x-shop::form.control-group.control>

                    <x-shop::form.control-group.error control-name="type" />
                </x-shop::form.control-group>

                <!-- Message -->
                <x-shop::form.control-group class="!mb-0">
                    <x-shop::form.control-group.label class="required">
                        @lang('shop::app.customers.account.gdpr.index.modal.message')
                    </x-shop::form.control-group.label>

                    <x-shop::form.control-group.control
                        type="textarea"
                        name="message"
                        rules="required"
                    />

                    <x-shop::form.control-group.error control-name="message" />
                </x-shop::form.control-group>
            </x-slot>

            <!-- Modal Footer -->
            <x-slot:footer>
                <div class="flex flex-wrap items-center gap-4">
                    <x-shop::button
                        class="primary-button max-w-none flex-auto rounded-2xl px-11 py-3 max-md:rounded-lg max-md:py-1.5"
                        :title="trans('shop::app.customers.account.gdpr.index.modal.save')"
                        ::loading="isStoring"
                        ::disabled="isStoring"
                    />
                </div>
            </x-slot>
        </x-shop::modal>

        {!! view_render_event('bagisto.shop.customers.account.gdpr.request.form_controls.after') !!}
    </x-shop::form>
</x-shop::layouts.account>
