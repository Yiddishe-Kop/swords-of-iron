<template>
    <div
        class="loader"
        style="height: 16px; width: 16px">
        <svg
            height="100%"
            viewBox="0 0 24 24"
            width="100%">
            <circle
                cx="12"
                cy="12"
                fill="none"
                r="8"
                stroke-width="4"
                style="opacity: 0.2" />
            <circle
                cx="12"
                cy="12"
                fill="none"
                r="8"
                stroke-width="4"
                style="stroke-dasharray: 80px; stroke-dashoffset: 60px" />
        </svg>
    </div>
</template>

<script>
export default {
    name: "Loader",
}
</script>

<style lang="scss">
.loader {
    animation: rotate 0.75s linear infinite;
    svg {
        circle {
            @apply stroke-current text-brand-800;
        }
    }
}
.light {
    .loader svg circle {
        @apply text-brand-200;
        stroke: currentColor;
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
