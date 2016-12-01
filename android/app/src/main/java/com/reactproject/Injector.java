package com.reactproject;


import dagger.ObjectGraph;

/**
 * Used for inject properties to a class
 */
public final class Injector {
    /**
     * Properties
     */
    private static ObjectGraph objectGraph = null;

    /**
     * Init object graph
     * @param rootModule
     */
    public static void init(final Object rootModule) {
        if (objectGraph == null) {
            objectGraph = ObjectGraph.create(rootModule);
        } else {
            objectGraph = objectGraph.plus(rootModule);
        }
        // Inject statics
        objectGraph.injectStatics();
    }

    /**
     * Init object graph to a explicit object/class
     * @param rootModule
     * @param target
     */
    public static void init(final Object rootModule, final Object target) {
        init(rootModule);
        inject(target);
    }

    /**
     * Inject
     * @param target
     */
    public static void inject(final Object target) {
        if (objectGraph != null && target != null) objectGraph.inject(target);
    }

    public static <T> T resolve(Class<T> type) {
        return objectGraph.get(type);
    }
}
