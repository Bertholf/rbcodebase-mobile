package com.reactproject.models.http;

public class HttpResponseWithData<T> extends HttpResponse {

    public Integer next;
    public T data;

    public Integer getNext() {
        return next;
    }

    public void setNext(Integer next) {
        this.next = next;
    }

    public void setData(T data) {
        this.data = data;
    }

    public T getData() {
        return data;
    }

}
